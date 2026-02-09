# Release Process

## Versioning
This project follows Semantic Versioning:
MAJOR.MINOR.PATCH

## Steps
1. Ensure develop is stable
2. Merge develop into main
3. Update `/CHANGELOG.md`
4. Create git tag
5. Push tag to repository

## Example
`git checkout main`

`git merge develop`

`git tag -a v1.0.0 -m "Release v1.0.0"`

`git push origin v1.0.0`


## After Release
- Monitor issues
- Prepare next milestone
