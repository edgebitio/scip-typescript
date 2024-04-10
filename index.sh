#!/bin/sh

if [ -z "$1" ] || [ -z "$2" ]; then
	echo "Usage: $0 INPUT-DIR OUTPUT-DIR" >/dev/stderr
	exit 1
fi

SRC="$1"
DEST="$2"
PROG_DIR="${PROG_DIR:-/app}"

mkdir -p "$DEST"

SCIP_TS="node ${PROG_DIR}/dist/src/main.js index "

${SCIP_TS} --infer-tsconfig --output "$DEST/index.scip" "$SRC"

for pkg_manifest in $(find "$SRC"/node_modules -wholename '*/package.json'); do
	echo "$d"
	pkg_name=$(jq -r .name < "$pkg_manifest")
	pkg_version=$(jq -r .version < "$pkg_manifest")
	out="$DEST"/$(echo "${pkg_name}@${pkg_version}.scip" | tr / -)
	in=$(dirname "$pkg_manifest")

	${SCIP_TS} --infer-tsconfig --output "$out" "$in"
done
