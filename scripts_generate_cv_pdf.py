import json
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(r"E:\BaiduSyncdisk\MUST\课题\Hylouis233.github.io")
DATA_PATH = ROOT / "src" / "data" / "academic.json"
OUTPUT_PATH = ROOT / "public" / "files" / "cv.pdf"
CHINESE_FONT_PATH = Path(r"C:\Windows\Fonts\msyh.ttc")
PDF_FONT_NAME = "MicrosoftYaHei"


def load_academic_data() -> dict:
    return json.loads(DATA_PATH.read_text(encoding="utf-8"))


def register_fonts():
    if PDF_FONT_NAME not in pdfmetrics.getRegisteredFontNames():
        pdfmetrics.registerFont(TTFont(PDF_FONT_NAME, str(CHINESE_FONT_PATH), subfontIndex=0))


def has_cjk(text: str) -> bool:
    return any('\u4e00' <= char <= '\u9fff' for char in text)


def make_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='Name', fontName='Helvetica-Bold', fontSize=18, leading=22, textColor=colors.black, spaceAfter=3))
    styles.add(ParagraphStyle(name='Header', fontName='Helvetica', fontSize=10, leading=14, textColor=colors.black, spaceAfter=3))
    styles.add(ParagraphStyle(name='Contact', fontName='Helvetica', fontSize=9, leading=12, textColor=colors.HexColor('#333333')))
    styles.add(ParagraphStyle(name='Section', fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=colors.black, spaceBefore=10, spaceAfter=6))
    styles.add(ParagraphStyle(name='Body', fontName='Helvetica', fontSize=9.2, leading=13, textColor=colors.black, spaceAfter=4))
    styles.add(ParagraphStyle(name='Meta', fontName='Helvetica', fontSize=9, leading=12, textColor=colors.HexColor('#444444'), spaceAfter=2))
    styles.add(ParagraphStyle(name='Small', fontName='Helvetica', fontSize=8.8, leading=12, textColor=colors.HexColor('#555555'), spaceAfter=3))
    styles.add(ParagraphStyle(name='BodyCJK', parent=styles['Body'], fontName=PDF_FONT_NAME))
    styles.add(ParagraphStyle(name='MetaCJK', parent=styles['Meta'], fontName=PDF_FONT_NAME))
    styles.add(ParagraphStyle(name='SmallCJK', parent=styles['Small'], fontName=PDF_FONT_NAME))
    return styles


def choose_style(styles, base_name: str, text: str):
    if has_cjk(text):
        return styles[f'{base_name}CJK']
    return styles[base_name]


def add_section_title(story, styles, title):
    story.append(Paragraph(title, styles['Section']))


def add_paragraph(story, styles, base_name: str, text: str):
    story.append(Paragraph(text, choose_style(styles, base_name, text)))


def add_entry(story, styles, title, meta=None, detail=None, link=None):
    add_paragraph(story, styles, 'Body', title)
    if meta:
        add_paragraph(story, styles, 'Meta', meta)
    if detail:
        add_paragraph(story, styles, 'Body', detail)
    if link:
        add_paragraph(story, styles, 'Small', link)


def render_publication(story, styles, item):
    title = item['title']['en']
    venue = item['venue']['en']
    status = item['status']['en']
    authorship = item.get('authorship', {}).get('en', '')
    note = item['note']['en']
    meta_parts = [str(item['year']), venue, status]
    if authorship:
        meta_parts.append(authorship)
    link_parts = []
    if item.get('url'):
        link_parts.append(item['url'])
    elif item.get('doi'):
        link_parts.append(f"DOI: {item['doi']}")
    if item.get('manuscriptId'):
        link_parts.append(f"Manuscript ID: {item['manuscriptId']}")
    add_entry(
        story,
        styles,
        title,
        meta=' · '.join(meta_parts),
        detail=note,
        link=' · '.join(link_parts) if link_parts else None,
    )


def publication_year_lookup(publications: list[dict]) -> dict[str, int]:
    return {item['title']['en']: item['year'] for item in publications}


def project_sort_key(item: dict, title_to_year: dict[str, int]) -> int:
    years = [title_to_year.get(title, 0) for title in item.get('relatedPublicationTitles', [])]
    return max(years) if years else 0


def main():
    register_fonts()
    academic = load_academic_data()
    styles = make_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
    )

    profile = academic['profile']
    education = academic['education']
    research_interests = academic['researchInterests']
    publication_groups = academic['publicationGroups']
    publications = academic['publications']
    projects = academic['projects']
    awards = academic['awards']
    experience = academic['experience']

    story = []
    story.append(Paragraph(profile['name'], styles['Name']))
    story.append(Paragraph('M.Sc. student, Faculty of Innovation Engineering, Macau University of Science and Technology', styles['Header']))
    story.append(Paragraph(profile['headline'], styles['Header']))
    story.append(Paragraph(profile['contactLine'], styles['Contact']))
    story.append(Spacer(1, 6))

    add_section_title(story, styles, 'Profile')
    add_paragraph(story, styles, 'Body', profile['summary'])

    add_section_title(story, styles, 'Education')
    for item in education:
        add_entry(
            story,
            styles,
            item['institution']['en'],
            f"{item['program']['en']} · {item['meta']['en']}",
            item['detail']['en'],
        )

    add_section_title(story, styles, 'Research Interests')
    for item in research_interests:
        add_paragraph(story, styles, 'Body', f"• {item['en']}")
    story.append(Spacer(1, 4))

    add_section_title(story, styles, 'Publications and Manuscripts')
    for group in publication_groups:
        items = sorted(
            [item for item in publications if item['category'] == group['key']],
            key=lambda item: item['year'],
            reverse=True,
        )
        if not items:
            continue
        add_paragraph(story, styles, 'Meta', group['title']['en'])
        for item in items:
            render_publication(story, styles, item)
        story.append(Spacer(1, 3))

    add_section_title(story, styles, 'Research Software and Projects')
    title_to_year = publication_year_lookup(publications)
    sorted_projects = sorted(projects, key=lambda item: project_sort_key(item, title_to_year), reverse=True)
    for item in sorted_projects:
        add_entry(
            story,
            styles,
            item['name']['en'],
            item['status']['en'],
            item['summary']['en'],
            item.get('repoUrl'),
        )

    add_section_title(story, styles, 'Awards')
    for item in sorted(awards, key=lambda item: item['year'], reverse=True):
        issuer = item.get('issuer', {}).get('en')
        line = f"• {item['year']} · {item['title']['en']}"
        if issuer:
            line = f"{line} · {issuer}"
        add_paragraph(story, styles, 'Body', line)

    add_section_title(story, styles, 'Experience')
    for item in experience:
        meta_parts = []
        if item.get('period', {}).get('en'):
            meta_parts.append(item['period']['en'])
        if item.get('organization', {}).get('en'):
            meta_parts.append(item['organization']['en'])
        add_entry(
            story,
            styles,
            item['title']['en'],
            ' · '.join(meta_parts) if meta_parts else None,
            item['detail']['en'],
        )

    doc.build(story)
    print(str(OUTPUT_PATH))


if __name__ == '__main__':
    main()
