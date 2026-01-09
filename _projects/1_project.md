---
layout: page
title: SURF python package
description: with background image
img: assets/img/SURF_thumbnail.png
importance: 1
category: work
related_publications: true
---

ESRF-ID10-SURF is a powerful package for analysis of surface scattering data obtain on the ID10 beamline at ESRF. It is constructed as a set of classes:

- XRR - for X-ray reflectometry analysis
- GID - for Grazing Incidence Diffraction with 1D detector and Soller collimator
- GIXS - for Grazing Incidence X-ray Scattering: both GISAXS and GIWAXS measured with a large 2D detector

Below I will provide an explanation of various corrections, provided by the package. First, let's deal with XRR data.

# X-ray Reflectometry

## Experimental setup

The usual XRR setup on ID10 is constructed in a simple way: beam is conditioned by a double mirror to reject higher harmonics, monochromated, collimated, focused with lenses and attenuated by a set of filters.
These filters are foils of the same thickness, stacked and affixed on a rotating wheel with 20 positions. Normally, each foil transmits around a third of intensity, so two filters give an order of magnitude difference.

This is a crucial component for an XRR measurement, as reflectivity decays as $ q_z^{-4} $, but the detector dynamic range is limited. For example, at $q_z = 0.4 \,\text{A}^{-1}$, reflectivity $ R \simeq 10^{-8} $.
That means that incoming intensity of $10^9$ will produce only 10 reflected photos, giving a very low signal-to-noise ratio.
However, the same intensity around the critical angle, where reflectivity is close to 1, reflected intensity will be far out of the acceptable countrate for hybrid photon-counting detectors, typically used for this kind of experiment.

This example illustrates the need for changing filters frequently. These foils are often crystalline, for example Cu foils. This produce an unwanted scattering, if a grain of a foil enters a Bragg condition.
A share of photons is thus scattered, leading to a slightly different transmission coefficient. This is amplified by a non-uniformity in thickness of the filters, misalignment and leads to jumps in detected intensity, when filters changes.
To mitigate this problem, two counts are performed at the same incident angle: one with the old filter, and one with a new one. This allows to calculate a "true" transmission ratio and get rid of the jumps in reflectivity.

For the experiments on liquid surfaces beam incident angle is changed by a Double Crystal Deflector (DCD).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Annotated_detector_profile.png" title="Integrated detector image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/detector_frames.png" title="Different incident angles" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left: Integrated detector image showing intense diffuse scattering and position of the specular reflection and the Bragg peak.  <br>
    On the right: Detector images at various incident angles, showing evolution of the diffuse scattering. 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
