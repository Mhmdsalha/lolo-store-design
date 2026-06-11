"use client";

import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/mock";

export function Header() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const isHome = pathname === "/";
  const transparent = isHome && !pastHero && !open;

  useEffect(() => {
    const updateHeaderState = () => {
      if (!isHome) {
        setPastHero(true);
        return;
      }

      const hero = document.querySelector<HTMLElement>(".hero");
      const threshold = hero ? Math.max(hero.offsetHeight - 92, 80) : 80;
      setPastHero(window.scrollY > threshold);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [isHome]);

  return (
    <header className={`site-header ${transparent ? "is-transparent" : "is-solid"}`}>
      <div className="container nav-row">
        <Link className="logo" href="/" aria-label="لولو الرئيسية">
          لولو
        </Link>

        <div className="header-search">
          <input aria-label="البحث" placeholder="ابحث عن منتجات..." />
          <Search size={19} />
        </div>

        <nav className="main-nav" aria-label="التصفح الرئيسي">
          <Link href="/">الرئيسية</Link>
          <Link href="/category/girls">الملابس</Link>
          <Link href="/category/toys">الألعاب</Link>
          <Link href="/category/accessories">العروض</Link>
          <Link href="/cart">اتصل بنا</Link>
        </nav>

        <div className="header-actions">
          <button className="icon-button" aria-label="المفضلة">
            <Heart size={20} />
          </button>
          <Link className="icon-button cart-link" href="/cart" aria-label="السلة">
            <ShoppingBag size={20} />
            {totalItems > 0 ? <span className="cart-badge">{totalItems}</span> : null}
          </Link>
          <button className="icon-button account-button" aria-label="حسابي">
            <UserRound size={20} />
          </button>
          <button className="icon-button menu-button" type="button" aria-label="القائمة" onClick={() => setOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="mobile-drawer"
          style={{
            display: "grid",
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(17, 28, 45, 0.24)",
          }}
        >
          <div
            style={{
              width: "min(360px, 86vw)",
              minHeight: "100vh",
              background: "#ffffff",
              padding: "1rem",
              boxShadow: "var(--shadow-hover)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link className="logo" href="/" onClick={() => setOpen(false)}>
                لولو
              </Link>
              <button className="icon-button" type="button" aria-label="إغلاق القائمة" onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav style={{ display: "grid", gap: "0.75rem", marginTop: "2rem" }}>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  className={`category-card tone-${category.tone}`}
                  href={`/category/${category.slug}`}
                  onClick={() => setOpen(false)}
                >
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
