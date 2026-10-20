# AcadeX

A free, mobile-first **attendance and marks tracker** for college students. Track attendance for every subject, see how close you are to the 75% limit, and get a projected SGPA and CGPA for all 8 semesters.

**Open the app:** https://soubhikrajghosh.github.io/AcadeX/

- Works on your phone like a normal app (install it to your home screen)
- Works offline after the first visit
- **Your data stays on your own phone.** There is no account, no login and no server. Nobody else can see it.

---

## 1. Install it on your phone

You only need to do this once.

**Android (Chrome)**
1. Open the link above in Chrome.
2. Tap the **⋮** menu (top right), then **Install app** (or **Add to Home screen**).
3. The AcadeX icon now appears on your home screen.

You can also open the **☰ menu** inside the app and tap **Install app on phone**.

**iPhone (Safari)**
1. Open the link above in Safari.
2. Tap the **Share** button, then **Add to Home Screen**.

---

## 2. First-time setup

When you open AcadeX for the first time it is empty. You have two ways to get started.

### Option A: Add subjects by hand
1. On the **Attendance** tab, tap **＋ Add subject**.
2. Enter the subject name and its credits, and choose the marks split (see section 6).
3. Repeat for each subject of the semester.

### Option B: Import your old attendance from Excel (recommended)
If you already have your present/absent records in a spreadsheet, you do not have to enter them day by day. See **section 4**.

---

## 3. Daily use: marking attendance

1. Open the **Attendance** tab.
2. The date at the top defaults to today. Tap it to mark a past day you forgot, or tap **Today** to come back.
3. For every class you actually had, tap **✓ Present** or **✕ Absent** on that subject.

Good to know:
- **Nothing is recorded unless you tap.** If you do not have a subject on a given day, simply do not tap it.
- **Every tap adds one class.** If you had two periods of the same subject on one day, tap twice. The tile shows ×2.
- Tapped by mistake? Press **↶ Undo last** under the tiles.
- Tap a subject card (anywhere except the buttons) to open its **full history** with every date, filterable by Present or Absent. You can delete a single entry from there.

### Reading the bubbles

Each bubble fills up to your attendance percentage. 100% is full, 75% is three-quarters full.

| Colour | Attendance | Meaning |
|---|---|---|
| Green, gentle bubbling | 85% and above | Safe |
| Amber, simmering | 75% to below 85% | Okay, but watch it |
| Red, violent boiling | Below 75% | Danger, you are short |

The minimum required attendance is **75%**. Even 74.9% shows as red.

Under every subject, the app also tells you either how many classes you can still skip, or how many you must attend in a row to get back to 75%.

---

## 4. Importing attendance from Excel

Use the file **`attendance_example.xlsx`** in this repository as your guide. Copy it, replace the subject names and fill in your own dates.

### Layout

Each subject takes two columns next to each other: a **Date** column and a **Status** column. The subject name goes in the header cell above the Date column. The cell to the right of it must say `Status`.

```
 #  |  C            | Status  |   |  BEE          | Status  |
----+---------------+---------+---+---------------+---------+
 1  |  21-Jul-2026  | Present |   |  22-Jul-2026  | Present |
 2  |  24-Jul-2026  | Present |   |  23-Jul-2026  | Absent  |
 3  |  27-Jul-2026  | Absent  |   |  24-Jul-2026  | Present |
```

### Rules
- **One row per class held.** Date in the first column, `Present` or `Absent` in the Status column. `P` and `A` also work.
- **Two classes on the same day?** Write the date on two rows.
- Subjects do not need the same number of rows. Leave the extra cells blank.
- Dates can be real Excel dates, or text like `21/07/2026` (day first) or `21 Jul 2026`.
- The header row (the one with the subject names and `Status`) must be within the first 15 rows.
- Rows with an unreadable date, or a status other than Present/Absent, are skipped.
- Files can be `.xlsx`, `.xls` or `.csv`.

### Which semester does it go into?
The app works this out in this order:
1. From the sheet name, for example a sheet called **Sem 2**.
2. From a label such as `sem 2` in the header row, to the left of the first subject.
3. Otherwise you choose it yourself in the preview.

To import several semesters at once, put each one on its own sheet named **Sem 1**, **Sem 2** and so on.

### Importing the file
1. Open the **☰ menu**, then tap **Import attendance from Excel**.
2. Pick your file.
3. A preview shows each subject with its present and absent counts. Check the semester, and for new subjects enter the **credits** and the **marks split**.
4. Tap **Import**.

If a subject with the same name already exists in that semester, its attendance is **replaced** by what is in your Excel file. The preview warns you before you confirm.

---

## 5. Exporting to Excel

Open the **☰ menu**:

- **Export all semesters** gives one workbook with a **Summary** sheet (present, absent, total, percentage and status per subject) and one sheet per semester.
- **Export Semester N only** gives the same for just the current semester.

The semester sheets use the same layout as the import format, so you can edit one and import it back.

---

## 6. Marks, SGPA and CGPA

Open the **SGPA** tab.

### Marks split
Every subject is out of **100** marks, divided into parts:

| Split | Parts |
|---|---|
| 3 parts (default) | Mid-sem **20**, End-sem **50**, Internals **30** |
| 2 parts | Mid-sem **50**, End-sem **50** |

If your subject has different maximum marks, tap the subject card and edit the maximums. They should add up to 100.

### Entering marks
Tap a subject card, type your score for each part you already have, and leave the others blank. Blank means "not happened yet".

### Projected scores
For parts you have not taken yet, AcadeX assumes you will score the same percentage as in the parts you already have. The bar shows hatched stripes for projected parts. Next to the bar you see the projected score out of 100 and the letter grade. At the top you see the **projected SGPA**. Once every part has a real score, the word "Projected" disappears.

### Grading (B.Tech scale)

| Letter | O | A+ | A | B+ | B | C | F |
|---|---|---|---|---|---|---|---|
| Grade point | 10 | 9 | 8 | 7 | 6 | 5 | 0 |
| Score out of 100 | 90 to 100 | 80 to 89.99 | 70 to 79.99 | 60 to 69.99 | 50 to 59.99 | 40 to 49.99 | 0 to 39.99 |

- **SGPA** = Σ(credits × grade point) ÷ Σ credits, for that semester.
- **CGPA** = the same calculation across all semesters, so semesters with more credits count for more.
- Both are shown to 2 decimal places.

This is the grading table of one particular university. If yours is different, the scale is stored in one line near the top of `index.html` (`GRADES`) and can be edited.

### Final CGPA
Open the **☰ menu** and tap **🎓 Final CGPA** to see every semester's SGPA and the overall CGPA.

---

## 7. Switching semesters

Open the **☰ menu** and tap **Semester 1** to **Semester 8**. Each semester has its own subjects, so you can add next semester's subjects when the time comes.

---

## 8. Keep your data safe (important)

Your data lives **inside your phone's browser storage**, under the address of this site. That means:

- **Clearing your browser data, uninstalling the app or changing phones erases it.**
- Using a different link (for example a copy of the site hosted somewhere else) starts you with empty data.

So please make a backup once in a while:

1. **☰ menu → Backup (JSON)** downloads a small `acadex-backup-DATE.json` file. Keep it somewhere safe (Drive, WhatsApp to yourself, etc.).
2. On a new phone or after a reset, open AcadeX and use **☰ menu → Restore backup**, then pick that file.

The **Excel export** also works as a backup for attendance.

---

## 9. Troubleshooting

| Problem | What to do |
|---|---|
| No "Install app" option | Open the link in Chrome (Android) or Safari (iPhone), not inside another app's built-in browser. |
| App looks old after an update | Close it completely and open it once more. If needed, open the link in the browser once to refresh. |
| "No attendance found" when importing | Check that each subject has a Date column followed directly by a column headed `Status`, and that the header is within the first 15 rows. Compare with `attendance_example.xlsx`. |
| Some rows were not imported | Their date was not readable or the status was not Present/Absent. Fix those cells and import again. |
| Wrong semester after import | Import again and choose the right semester in the preview, or name the sheet `Sem N`. |
| Lost all my data | Use **Restore backup** if you have a backup file. Without a backup it cannot be recovered. |

---

## 10. Privacy

- No account, no tracking and no server storage. Everything you enter stays in your own browser.
- The only things that load from the internet are the app files themselves.
- The Excel and JSON files you export or import are handled entirely on your device.

---

## For developers

AcadeX is a single static web app: `index.html` plus a small manifest, a service worker and icons. There is no build step.

| File | Purpose |
|---|---|
| `index.html` | The whole app (UI, logic, styles) |
| `manifest.json` | Makes it installable as an app |
| `sw.js` | Service worker for offline use |
| `xlsx.mini.min.js` | SheetJS, used for Excel import and export |
| `icon-*.png`, `apple-touch-icon.png` | App icons |
| `attendance_example.xlsx` | Example of the Excel layout the importer expects |

To run it locally, serve the folder over http (for example `python3 -m http.server`) and open it in a browser. To host it, publish the folder with GitHub Pages or any static host.
