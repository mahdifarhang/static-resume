"""Generate the resume's typographic Open Graph card. Requires Pillow."""

from pathlib import Path
import argparse

from PIL import Image, ImageDraw, ImageFont


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--font-dir", type=Path, default=Path("/usr/share/fonts/truetype/dejavu"))
args = parser.parse_args()

SCALE = 2
BACKGROUND = "#192321"
TEXT = "#eff3ef"
MUTED = "#a1b2aa"
ACCENT = "#87d5b8"
LINE = "#33443d"

card = Image.new("RGB", (1200 * SCALE, 630 * SCALE), BACKGROUND)
draw = ImageDraw.Draw(card)


def text(x, y, value, size, color=TEXT, bold=False):
    filename = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    font = ImageFont.truetype(str(args.font_dir / filename), size * SCALE)
    draw.text((x * SCALE, y * SCALE), value, font=font, fill=color)


def line(points, color=LINE, width=1):
    draw.line([(x * SCALE, y * SCALE) for x, y in points], fill=color, width=width * SCALE)


line([(0, 0), (1200, 0)], ACCENT, 10)
text(74, 48, "mf.", 38, ACCENT, bold=True)
text(167, 66, "SOFTWARE ENGINEERING  /  RESUME", 16, MUTED)
text(72, 163, "Mahdi Farhang", 76, bold=True)
text(76, 274, "Software Engineer", 33, ACCENT)
text(76, 352, "Backend services. Full-stack applications. Business automation.", 22, TEXT)
text(76, 394, "Python  /  Django  /  PostgreSQL", 21, MUTED)
line([(76, 485), (1124, 485)])
text(76, 524, "resume.mfarhang.ir", 23, ACCENT)
text(836, 529, "EXPERIENCE & SKILLS", 16, MUTED)

destination = Path(__file__).resolve().parents[1] / "static" / "social-preview.png"
card.resize((1200, 630), Image.Resampling.LANCZOS).save(destination, optimize=True)
print(f"Generated {destination.name} (1200 × 630)")
