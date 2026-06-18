# Content Audit — Website vs. Sokin Uyqu Brand Documents

**Date:** 2026-06-18
**Source of truth:** print/marketing PDFs in `Desktop/sokinuyqu/`
**Compared against:** site content in `src/locales/uz.ts`, `src/locales/ru.ts`, `src/data/mockBlogPosts.ts`, and brand strings in components.
**Decision taken:** Rebrand the site from "SilentSleep" → **Sokin Uyqu**.

> Legend: 🔴 must fix (wrong/contradicts docs) · 🟠 should add (in docs, missing on site) · ⚪ site-only (not in docs, needs confirmation) · ✅ already correct

---

## 1. Summary

The site was built on a **placeholder identity** that does not match the real clinic. Three names are tangled:

- **Sokin Uyqu** — the actual clinic ("Xurrak va Apnoeni Davolash Markazi"), domain `sokinuyqu.uz`. ← the real brand
- **UyquLab** — a *sub-service* of Sokin Uyqu (home HSAT test; the price list labels HSAT as "UyquLab xizmati"). The site treats it as the main CTA → `uyqulab.uz`.
- **SilentSleep** — the name currently all over the site. **Appears nowhere in the docs.** Placeholder.

Beyond the name, the phone number, locations, doctors, prices, and the sleep test itself all disagree with the docs.

---

## 2. Brand rebrand scope (SilentSleep → Sokin Uyqu)

Every place the old name/identity is hard-coded:

| File | Line(s) | Current | Change to |
|---|---|---|---|
| `src/components/ui/Logo.tsx` | 14–17 | `alt="SilentSleep logo"`, `Silent`/`Sleep` text spans | "Sokin Uyqu" + tagline "Xurrak va Apnoeni Davolash Markazi"; swap logo asset |
| `src/locales/uz.ts` | 8 | `cta: "UyquLab"` | keep as a service link, but primary brand = Sokin Uyqu (see §7) |
| `src/locales/uz.ts` | 13 | "SilentSleep klinikasi…" | "Sokin Uyqu klinikasi…" |
| `src/locales/uz.ts` | 179 | "© 2026 SilentSleep…" | "© 2026 Sokin Uyqu…" |
| `src/locales/uz.ts` | 187 | "SilentSleep — uyqu apnoesi…" | "Sokin Uyqu — …" |
| `src/locales/ru.ts` | 15, 181, 189 | RU equivalents of above | same, in Russian |
| `src/data/mockBlogPosts.ts` | 11,30,48,69,87,104 | `author: 'Dr. SilentSleep'` | real author (see §5 doctors) or "Sokin Uyqu" |
| `src/components/ui/BlogCard.tsx` | 18 | "SilentSleep Blog" | "Sokin Uyqu Blog" |
| `src/pages/Blog.tsx` | 36 | "SilentSleep" | "Sokin Uyqu" |
| `src/pages/BlogPostPage.tsx` | 12 | "SilentSleep Blog" | "Sokin Uyqu Blog" |
| `src/components/sections/LocationContact.tsx` | 78 | `title="SilentSleep joylashuvi"` | "Sokin Uyqu joylashuvi" |
| `package.json` | 2 | `"name": "silentsleep-tmp"` | optional rename |
| repo folder / `CLAUDE.md` | — | "SilentSleep-frontend" | optional rename |

**Logo asset:** the docs use a distinct logo (sunrise-over-water mark + "SOKIN UYQU" wordmark). Current `logo-blue.png` / `logo-white.png` are the SilentSleep logo and will need replacing.

---

## 3. Contact information 🔴

| Field | Docs (truth) | Site | Action |
|---|---|---|---|
| Phone | **+998 (77) 103 38 83** (consistent across every doc) | `77 113 38 83` (`uz.ts`/`ru.ts` L20/22) | 🔴 fix — wrong digits (**103** not 113) |
| Locations | **3 branches:** Toshkent (asosiy) · Andijon · Farg'ona | single Tashkent address only | 🔴 add Andijon + Farg'ona |
| Telegram | `@sokin_uyqu` | — | 🟠 add |
| Instagram | `@sokinuyqu_official` | — | 🟠 add |
| Website | `sokinuyqu.uz` | — (not shown as text) | 🟠 add |
| Tashkent address | **not in docs** (docs only name cities) | "Qashqar dahasi, 24A, 100017, Toshkent" + Yandex map @ 41.320991,69.276312, bus 17, metro Abdulla Qodiriy | ⚪ **verify** — can't confirm from docs |
| Working hours | **not in docs** | full Mon–Sun table | ⚪ verify |

> **Data gap:** the docs give no street addresses or hours for any branch. You'll need to supply real addresses/hours for Toshkent, Andijon, and Farg'ona.

---

## 4. Sleep test 🟠 (wrong test entirely)

- **Site (`uz.ts` test.*):** a custom **5-question** quiz, scored low/medium/high.
- **Docs:** the clinic uses the standard **STOP-BANG** questionnaire — **8 yes/no questions**, 1 point each:

  | | Question (UZ from flyer) |
  |---|---|
  | **S**nore | Baland xurraklayman (yopiq eshik ortidan eshitiladi) |
  | **T**ired | Kunduzi tez-tez charchayman, uyqusirayman |
  | **O**bserved | Kimdir uyquda nafasim to'xtashini ko'rgan |
  | **P**ressure | Yuqori qon bosimi (yoki davolayapman) |
  | **B**MI | Tana massa indeksi > 35 kg/m² |
  | **A**ge | Yoshim 50 dan katta |
  | **N**eck | Bo'yin aylanasi > 40 sm |
  | **G**ender | Erkak jinsi |

  **Scoring:** 0–2 past xavf · 3–4 o'rtacha xavf · 5–8 yuqori xavf.

The flyer, booklet, and poster all advertise "STOP-BANG anketasi — sokinuyqu.uz," so the site is *expected* to host STOP-BANG. **Recommendation:** replace the 5-question quiz with STOP-BANG (note: BMI and neck circumference need numeric inputs or yes/no phrasing as above).

---

## 5. Doctors / Team 🔴

- **Site (`uz.ts` about.doctors):** 3 placeholders `Dr. [Ism Familiya]` (Uyqu tibbiyoti mutaxassisi / Pulmonolog / Nevrolog).
- **Docs (business card):** **Dr. Tuygunxon Muzaffarov** — LOR · rinoxirurg · somnolog-xirurg, **Bosh shifokor**.
- Docs also describe the team composition: **LOR, somnolog, anestezeolog, pulmonolog** ("bir joyda").

🔴 Replace placeholders with the real head doctor; 🟠 fill remaining team from real staff (not in docs — **data gap**, need names/photos).
Also: blog `author: 'Dr. SilentSleep'` × 6 → real author name.

---

## 6. Services & prices 🔴 (numbers don't match at all)

Site prices appear **nowhere** in the docs.

| Site (`sleeptrack.services`) | Docs price list (`Narxlar`) |
|---|---|
| "Kompyuter somnografiyasi" — 800 000 | Uy uyqu testi (HSAT, WatchPAT) — **1 950 000** · HSAT klinikada — **2 450 000** |
| "…Premium" — 1 200 000 → 990 000 | PSG (tunda klinikada) — **2 900 000** |
| — | Birinchi konsultatsiya (40 daq, LOR+somnolog) — **250 000** |
| — | Telemeditsina — **200 000** |
| — | Split-night (tashxis + titratsiya) — **3 500 000** |
| — | DISE (medikamentoz endoskopiya) — **2 500 000** |
| — | CPAP titratsiya (statsionar) — **2 000 000** |
| — | Auto-titratsiya (uyda, APAP) — **600 000** (BEPUL if renting CPAP) |
| — | CPAP ijara SINOV (3 kun) — **340 000 dan** |
| — | CPAP ijara STANDART (1 oy) — **1 440 000 dan** |
| — | CPAP ijara DAVOLANISH 12 oy (rent-to-own) — **12 970 000 dan** |
| — | Jarrohlik (4 daraja + multilevel + anesteziya) — **Konsultatsiyada** |

**Docs note:** prices are "2026, so'mda, taxminiy"; final price set after consultation.

**In docs, missing from site (🟠):**
- Corporate discounts: 5–9 → 10% · 10–24 → 15% · 25+ → 20%
- "DO'STIM" referral program · "Uyqu kuni" promotion

**On site, not in docs (⚪ verify):** payment methods block (cash; Humo/Uzcard/Visa/Mastercard; Payme/Click commission-free). Plausible but unconfirmed.

**Equipment:** site lists WatchPAT One + WatchPAT 300. Docs confirm **WatchPAT** is used for HSAT ✅, but don't mention the "300" model specifically.

---

## 7. Treatment / services content 🟠 (site is missing the real offering)

The `/treatment` page is still a "coming soon" placeholder (`placeholders.treatment`). The docs describe a full clinic offering not represented anywhere on the site:

- **Diagnostics:** HSAT (uy uyqu testi, natija ~3 soatda), PSG (oltin standart), DISE, CPAP titratsiya — all **AASM-standard** (American Academy of Sleep Medicine).
- **Treatment:** CPAP titration + rental (rent-to-own), **multilevel surgery** (burun → tanglay → til asosi).
- **4-step patient journey** (booklet): 1) Konsultatsiya (LOR+somnolog, 40 daq) → 2) Tashxis (HSAT/PSG) → 3) Davolash rejasi (CPAP / jarrohlik / kombinatsiya) → 4) Nazorat (telemonitoring + titratsiya).
- **"Why us"** (booklet): AASM standard · experienced multi-disciplinary team · full diagnostics · surgery.
- **Symptom checklist** (booklet, 7 items): baland xurrak · uyquda nafas to'xtashi · kunduzi uyqusirash · ertalabki bosh og'rig'i · diqqat/xotira pasayishi · tunda tez uyg'onish · yuqori qon bosimi → "2+ belgi = tekshiruv tavsiya."
- **Marketing stats** (poster): 1 mlrd+ have OSA worldwide · 80% undiagnosed · 2× heart risk.

**UyquLab relationship:** treat UyquLab as the home-test sub-brand/service under Sokin Uyqu — not the top-level CTA. The main CTA should be "Konsultatsiyaga yozilish" (consultation booking), as every doc states ("Birinchi qadam — konsultatsiya, 250 000 so'mdan").

---

## 8. What already matches ✅

- Footer tagline "Sog'lom uyqu — sog'lom hayot" = docs slogan exactly.
- Apnea education content (OSA definition, AHI 5–14 / 15–29 / 30+, obstructive/central/complex types) is medically sound and consistent with the docs' framing.
- WatchPAT used for home testing.
- AASM standard referenced in docs (could be surfaced on site for credibility).

---

## 9. Operational/legal documents — NOT website material (FYI)

These are clinic print forms; keep them off the public site (unless you later build a patient portal). Reviewed by title/purpose, not deeply parsed:

- `Sokin_Uyqu_Bemor_Anketasi_A4` — patient intake form
- `Sokin_Uyqu_Bemor_Tibbiy_Kartasi_OSA_STOPBANG_A4` — clinical medical card
- `Sokin_Uyqu_Informed_Consent_A4` — informed consent
- `Sokin_Uyqu_Qabul_Varaqasi_A4` — reception sheet
- `Sokin_Uyqu_Shartnoma_A4` + `Sokin_Uyqu_Shartnoma_UZ_RU_A4` — service contracts
- `UyquLab_CPAP_Ijara_Shartnoma_UZ_RU_A4` — CPAP rental contract (referenced by a lock file, **PDF not present** in the folder)

---

## 10. Open questions / data gaps (need you to supply)

1. **Addresses + hours** for all 3 branches (Toshkent / Andijon / Farg'ona) — not in docs.
2. **Real doctor roster** beyond Dr. Tuygunxon Muzaffarov (names, titles, photos).
3. **Final site prices** — use the docs' price list as-is, or a curated subset?
4. **UyquLab** — keep `uyqulab.uz` as an external sub-site, or fold home-testing into the main site?
5. **Logo files** — do you have the Sokin Uyqu logo assets (the sunrise mark)?
6. Confirm the **Tashkent address/map** and **payment methods** currently on the site are real.
