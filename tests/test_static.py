import re
import unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]

class TestStatic(unittest.TestCase):
    def test_essential_files(self):
        for filename in ('README.md','README.ru.md','LICENSE','SECURITY.md','website/index.html','website/app.js','website/styles.css','templates/AGENTS.md'):
            with self.subTest(filename=filename): self.assertTrue((ROOT/filename).is_file())
    def test_no_remote_assets_or_script_dependencies(self):
        html=(ROOT/'website/index.html').read_text()
        self.assertIn('src="app.js"',html)
        self.assertIn('href="styles.css"',html)
        self.assertNotRegex(html,r'<script[^>]+src="https?://')
        self.assertNotRegex(html,r'<link[^>]+href="https?://')
    def test_task_buttons_have_presets(self):
        html=(ROOT/'website/index.html').read_text()
        js=(ROOT/'website/app.js').read_text()
        for name in re.findall(r'data-task="(\w+)"',html):
            self.assertRegex(js,r'\b'+name+r':\{name:')
    def test_sources_and_disclaimer(self):
        html=(ROOT/'website/index.html').read_text()
        self.assertGreaterEqual(html.count('https://help.openai.com/'),3)
        self.assertIn('не связан с OpenAI', (ROOT/'website/app.js').read_text())
    def test_no_secrets(self):
        combined='\n'.join(p.read_text() for p in (ROOT/'website').iterdir() if p.is_file())
        self.assertNotRegex(combined,r'sk-proj-[A-Za-z0-9]{12,}')

if __name__=='__main__':unittest.main()
