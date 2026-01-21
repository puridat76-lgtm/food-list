"use client";

import { useMemo, useState } from "react";
import { MENU } from "../lib/menu";

function money(n: number) {
  return n.toLocaleString("th-TH");
}

const PAGE_BG = "#FFF2D6";
const CARD_BG = "#FFc5a2";

const CATS = ["ทั้งหมด", "ข้าวญี่ปุ่น", "มาม่า", "ซัมยัง", "เครื่องดื่ม", "พิเศษ"] as const;
type Cat = (typeof CATS)[number];

export default function MenuPage() {
  const [activeCat, setActiveCat] = useState<Cat>("ทั้งหมด");
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  // ✅ NEW: Search
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    // 1) filter by category
    let list = activeCat === "ทั้งหมด" ? MENU : MENU.filter((m) => m.category === activeCat);

    // 2) filter by search keyword (ชื่อเมนู / หมวดหมู่)
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((m) => {
        const name = String(m.name || "").toLowerCase();
        const cat = String(m.category || "").toLowerCase();
        return name.includes(q) || cat.includes(q);
      });
    }

    return list;
  }, [activeCat, search]);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: PAGE_BG,
        padding: 16,
        color: "#000",
        fontFamily: "inherit",
      }}
    >
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        {/* ===== HEADER (Title center + Search top-right) ===== */}
        <div
          style={{
            marginTop: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {/* left spacer (ช่วยให้หัวข้ออยู่กลาง) */}
          <div style={{ width: 260 }} />

          {/* title (center) */}
          <div style={{ flex: 1, textAlign: "center", minWidth: 220 }}>
            <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: 1 }}>
              🐟 รายการอาหาร 🐟
            </div>
          </div>

          {/* search (top-right) */}
          <div
            style={{
              width: 260,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                width: "100%",
                maxWidth: 260,
                padding: "8px 12px",
                borderRadius: 999,
                border: "1.5px solid rgba(0,0,0,0.25)",
                background: "rgba(255,255,255,0.55)",
                boxShadow: "0 2px 0 rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ opacity: 0.55 }}>🔎</span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ค้นหาเมนู..."
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: 14,
                  color: "#000",
                  opacity: 0.85,
                }}
              />

              {/* ปุ่มล้างข้อความ (จางๆ ไม่เด่น) */}
              {search.trim() !== "" && (
                <button
                  onClick={() => setSearch("")}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    opacity: 0.45,
                    fontSize: 16,
                    lineHeight: 1,
                  }}
                  aria-label="ล้างคำค้นหา"
                  title="ล้าง"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              overflowX: "auto",
              padding: "8px 8px",
              maxWidth: "100%",
              scrollbarWidth: "none",
            }}
          >
            {CATS.map((t) => {
              const active = activeCat === t;
              return (
                <button
                  key={t}
                  onClick={() => setActiveCat(t)}
                  style={{
                    minWidth: 92,
                    padding: "10px 18px",
                    borderRadius: 999,
                    border: "2px solid #000",
                    background: active ? "#ffc5a2" : "#fff",
                    fontWeight: 400,
                    cursor: "pointer",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* ✅ ถ้าค้นหาแล้วไม่เจอ */}
        {filtered.length === 0 && (
          <div
            style={{
              marginTop: 28,
              textAlign: "center",
              opacity: 0.6,
              fontWeight: 400,
            }}
          >
            ไม่พบเมนูที่ค้นหา 😅
          </div>
        )}

        {/* ===== GRID (auto responsive) ===== */}
        <div
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(430px, 1fr))",
            gap: 26,
          }}
        >
          {filtered.map((m) => (
            <div
              key={m.id}
              style={{
                background: CARD_BG,
                border: "3px solid #000",
                borderRadius: 34,
                padding: 16,
                boxShadow: "0 14px 0 0 #000",
              }}
            >
              {/* IMAGE */}
              <button
                type="button"
                onClick={() => setPreview({ src: m.img, title: m.name })}
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    border: "3px solid #000",
                    borderRadius: 26,
                    overflow: "hidden",
                    background: "#fff",
                    height: 320,
                  }}
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </button>

              {/* TEXT */}
              <div style={{ marginTop: 18, paddingLeft: 18 }}>
                <div style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.35 }}>
                  ชื่อเมนู : {m.name}
                </div>

                <div style={{ marginTop: 6, fontSize: 14, lineHeight: 1.8 }}>
                  <div>ราคา : {money(m.price)} บาท</div>
                  <div>หมวดหมู่ : {m.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PREVIEW MODAL ===== */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 9999,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 1000 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
                color: "white",
              }}
            >
              <div style={{ fontWeight: 400, opacity: 0.95 }}>{preview.title}</div>
              <button
                onClick={() => setPreview(null)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 14,
                  border: "none",
                  background: "#fff",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
              >
                ปิด
              </button>
            </div>

            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "#000",
              }}
            >
              <img
                src={preview.src}
                alt={preview.title}
                style={{
                  width: "100%",
                  height: "70vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
