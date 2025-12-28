from setuptools import setup, find_packages

setup(
    name="linkedin-cli",
    version="0.1.0",
    description="A CLI for LinkedIn (placeholder)",
    author="Your Name",
    packages=find_packages(),
    install_requires=[
        "click"
    ],
    entry_points={
        'console_scripts': [
            'linkedin-cli=linkedin_cli.cli:cli',
        ],
    },
)
