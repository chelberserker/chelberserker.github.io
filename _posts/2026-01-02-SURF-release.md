---
layout: post
title: SURF Python package is released
date: 2026-01-02 12:00:00-0400
description: Release of a software package for Surface X-ray scattering processing
tags: [XRR, GID, python, software]
categories: [software]
giscus_comments: true
related_posts: false
---

I have released a Python package for XRR and GID data analysis. This has organically emerged from my PhD work on the beamline.
The main purpose of it is simple and reproducible processing of X-ray reflectivity and Grazing Incidence Diffraction data obtained on the ID10-SURF beamline at ESRF.
Main processing pipeline was settled during past few years (2021-2024) with lots of input from Oleg Konovalov (scientist in charge of ID10), Maciej Jankowski (beamline scientist at the time, now software engineer at ESRF) and some beamline users.

For the moment it is only focused on ID10-SURF setup, but later other instruments may be implemented, e.g. BM28 XMaS at ESRF.
Overall logic follows ESRF data structure, which is NeXuS compliant, when generated with BLISS.
In principle, it can be adapted to be used with EWOKS software to initiate processing in real time.

The package can be installed via pip:

```bash
pip install esrf-id10-surf
```

If you fancy making changes to the code to facilitate your specific analysis, then package can be installed in the modifiable way:

```bash
git clone https://github.com/chelberserker/ESRF_ID10_SURF
cd ESRF_ID10_SURF
pip install -e .
```

Package also provides a batch processing through command line script.

Code is available freely on my [GitHub](https://github.com/chelberserker/ESRF_ID10_SURF) and is distributed through MIT license.
API documentation is hosted [here](https://chelberserker.github.io/ESRF_ID10_SURF) and will be updated 

I have described operation of the soft in [documentation](https://chelberserker.github.io/ESRF_ID10_SURF) and in a [blog post](/_projects/1_project_SURF.md)
