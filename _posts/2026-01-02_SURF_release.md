---
layout: post
title: a post with jupyter notebook
date: 2026-01-02 12:00:00-0400
description: Release of a software package for Surface X-ray scattering processing
tags: XRR, GID, python, software
categories: software
giscus_comments: true
related_posts: false
---

I have just released a Python package that organically arise from my PhD work. 
The main purpose of it is simple and reproducible processing of X-ray reflectivity and Grazing Incidence Diffraction data obtained on the ID10-SURF beamline at ESRF.
Main processing pipeline was settled during past few years with inputs from Oleg Konovalov (scientist in charge of ID10) and Maciej Jankowski (beamline scientist at the time, now software engineer at ESRF).

The package can be installed via pip:

````markdown
```bash
pip install esrf-id10-surf
```
````

If you fancy making changes to the code to facilitate your specific analysis, then package can be installed in the modifiable way:

````markdown
```bash
git clone https://github.com/chelberserker/ESRF_ID10_SURF
cd ESRF_ID10_SURF
pip install -e .
```
````

Code is available freely on my [Github](https://github.com/chelberserker/ESRF_ID10_SURF) and is distributed through MIT license.
API documentation is hosted [here](https://chelberserker.github.io/ESRF_ID10_SURF) and will be updated 


{% raw %}

```liquid
{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/blog.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/SURF_usage.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
```

{% endraw %}
