#!/bin/sh

if [ -z "$1" ]; then
	echo "Usage: $0 OUTPUT-DIR" >/dev/stderr
	exit 1
fi

DEST="$1"
PROG_DIR="${PROG_DIR:-/app}"

mkdir -p "$DEST"

SCIP_TS="node ${PROG_DIR}/dist/src/main.js index "

${SCIP_TS} --infer-tsconfig --output "$DEST/index.scip" .

for pkg_manifest in $(find node_modules -wholename 'node_modules/*/package.json'); do
	echo "$d"
	pkg_name=$(jq -r .name < "$pkg_manifest")
	pkg_version=$(jq -r .version < "$pkg_manifest")
	out="$DEST"/$(echo "${pkg_name}@${pkg_version}.scip" | tr / -)
	src=$(dirname "$pkg_manifest")

	${SCIP_TS} --infer-tsconfig --output "$out" "$src"
done
