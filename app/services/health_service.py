from pathlib import Path


def calculate_health(repo_name: str):

    repo_path = Path("repositories") / repo_name

    score = 0

    details = {}

    # README

    if (repo_path / "README.md").exists():
        score += 20
        details["Documentation"] = "Excellent"
    else:
        details["Documentation"] = "Missing"

    # Requirements

    if (
        (repo_path / "requirements.txt").exists()
        or
        (repo_path / "pyproject.toml").exists()
    ):
        score += 20
        details["Dependencies"] = "Present"
    else:
        details["Dependencies"] = "Missing"

    # Tests

    tests = list(repo_path.glob("tests*"))

    if tests:
        score += 20
        details["Testing"] = "Present"
    else:
        details["Testing"] = "Missing"

    # GitHub Actions

    if (repo_path / ".github").exists():
        score += 20
        details["CI/CD"] = "Present"
    else:
        details["CI/CD"] = "Missing"

    # Python Files

    py_files = list(repo_path.rglob("*.py"))

    if len(py_files) > 10:
        score += 20
        details["Code Quality"] = "Good"
    else:
        details["Code Quality"] = "Basic"

    return {
        "score": score,
        "details": details
    }