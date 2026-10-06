"use client";

import { useMemo, useState } from "react";
import { MENU } from "../lib/menu";

function money(n: number) {
  return n.toLocaleString("th-TH");
}

const PAGE_BG = "#FFF2D6";
const CARD_BG = "#FFc5a2";

const CATS = ["ทั้งหมด", "ข้าวญี่ปุ่น", "ซูชิ", "มาม่า", "ซัมยัง", "เครื่องดื่ม", "พิเศษ"] as const;
type Cat = (typeof CATS)[number];

export default function MenuPage() {
  const [activeCat, setActiveCat] = useState<Cat>("ทั้งหมด");
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  const filtered = useMemo(() => {
    if (activeCat === "ทั้งหมด") return MENU;
    return MENU.filter((m) => m.category === activeCat);
  }, [activeCat]);

  return (
    <main
      className="page"
      style={{
        minHeight: "100vh",
        backgroundColor: PAGE_BG,
        padding: 16,
        color: "#000",
        fontFamily: "inherit",
      }}
    >
      {/* ✅ CSS สำหรับ Mobile Responsive + Tabs เลื่อนเนียน */}
      <style>{`
        .wrap {
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;
        }

        /* ✅ TAB BAR */
        .tabsRow {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 8px 8px;
          max-width: 100%;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .tabsRow::-webkit-scrollbar { display: none; }

        .tabBtn {
          flex: 0 0 auto;       /* ✅ กันปุ่มยืดจนตัด */
          min-width: 92px;
          padding: 10px 18px;
          border-radius: 999px;
          border: 2px solid #000;
          background: #fff;
          font-weight: 900;
          cursor: pointer;
          white-space: nowrap;  /* ✅ กันคำตัดบรรทัด */
        }

        /* ✅ Grid */
        .grid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .card {
          width: 100%;
          box-sizing: border-box;
        }

        .imgBox { height: 320px; }

        /* ✅ มือถือ: ให้หน้า “พอดีแบบรูป” */
        @media (max-width: 480px) {
          .page { padding: 12px !important; }

          /* ✅ ตัวนี้สำคัญสุด: ล็อคความกว้างให้เหมือนภาพ */
          .wrap {
            max-width: 400px !important; /* ✅ ปรับเลขนี้ได้เอง 380/400/420 */
            width: 100% !important;
            margin: 0 auto !important;
          }

          .grid {
            grid-template-columns: 1fr !important;
            row-gap: 50px !important;
            column-gap: 50px !important;
            }
          .title {
            font-size: 26px !important;
          }

          .tabsRow {
            justify-content: flex-start !important; /* ✅ มือถือให้เลื่อนแท็บ */
            padding: 8px 4px !important;
          }

          .tabBtn {
            min-width: 86px !important;
            padding: 9px 14px !important;
            font-size: 14px !important;
            font-weight: 900 !important;
          }

          .imgBox {
            height: 260px !important;
          }

          .cardOuter {
            border-width: 4px !important;
            border-radius: 30px !important;
          }

          .imgFrame {
            border-width: 4px !important;
            border-radius: 22px !important;
          }
        }
      `}</style>

      <div className="wrap">
        {/* ===== HEADER ===== */}
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <div className="title" style={{ fontSize: 34, fontWeight: 900, letterSpacing: 1 }}>
            🐟 รายการอาหาร 🐟
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
          <div className="tabsRow">
            {CATS.map((t) => {
              const active = activeCat === t;
              return (
                <button
                  key={t}
                  onClick={() => setActiveCat(t)}
                  className="tabBtn"
                  style={{
                    background: active ? "#ffc5a2" : "#fff",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid">
          {filtered.map((m) => (
            <div
              key={m.id}
              className="card cardOuter"
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
                  className="imgFrame"
                  style={{
                    border: "3px solid #000",   /* ✅ แก้แล้ว */
                    borderRadius: 26,
                    overflow: "hidden",
                    background: "#fff",
                  }}
                >
                  <div className="imgBox">
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
                </div>
              </button>

              {/* TEXT */}
              <div style={{ marginTop: 18, paddingLeft: 18 }}>
                <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.35 }}>
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
              <div style={{ fontWeight: 700, opacity: 0.95 }}>{preview.title}</div>
              <button
                onClick={() => setPreview(null)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 14,
                  border: "none",
                  background: "#fff",
                  fontWeight: 700,
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
