#!/usr/bin/env bash
# Reproducible build with the TeX Live version the original was built with (TeX Live 2017, pdfTeX 1.40.18).
# Requires podman (or docker: export ENGINE=docker). Output: build/iv2018-147.pdf
set -euo pipefail
cd "$(dirname "$0")"
ENGINE=${ENGINE:-podman}
IMAGE=docker.io/texlive/texlive:TL2017-historic
mkdir -p build
"$ENGINE" run --rm -e openout_any=a -v "$PWD/src:/src:ro,Z" -v "$PWD/build:/out:Z" -w /src "$IMAGE" \
  latexmk -pdf -interaction=nonstopmode -outdir=/out iv2018-147.tex
