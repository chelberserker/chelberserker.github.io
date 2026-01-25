---
layout: post
title: New release of ESRF-ID10-SURF
date: 2026-01-24 10:00:00-0000
inline: false
related_posts: false
---

## New release of ESRF-ID10-SURF

New release of the package is now published on [PyPi](https://pypi.org/project/esrf-id10-surf/).
Documentation can be found [here](https://chelberserker.github.io/ESRF_ID10_SURF) and description of logic is in [this blog post](/_projects/1_project_SURF.md).

New features include:

- Command line interface for batch processing and configuration with YAML file
- Automatic Mythen calibration script
- Saving GID data to .h5 files sample-wise
- Saving GID data as ASCII (not recommended, produces very large files)
- A simple GUI

For the moment, I recommend using either batch processing configured with YAML file or using Jupyter Notebooks.
Both of these are reproducible and stable, jupyter way provides more flexibility for initial analysis.

Plans for the next release are:

- Modular data analysis for GID with simple fits performed systematically
- Loading of processed GID data from .h5 files
- Rebinning of q-maps for XRR data
