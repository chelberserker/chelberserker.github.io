---
layout: page
title: SURF python package
description: python package for surface scattering data processing
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

The usual XRR setup on ID10 is constructed in a simple way: beam is conditioned by a double mirror to reject higher harmonics, monochromated, collimated, focused with lenses (for experiments on liquid surfaces beam incident angle is changed by a Double Crystal Deflector (DCD)) and attenuated by a set of filters.
These filters are foils of the same thickness, stacked and affixed on a rotating wheel with 20 positions. Normally, each foil transmits around a third of intensity, so two filters give an order of magnitude difference.
Before filters, beam intensity is measured either by an ionization chamber in DCD setup or by an avalanche photodiode measuring air scattering for experiments on solid surfaces to account for intensity fluctuations.
Next, beam finally hits the sample, be it a Si wafer of a liquid surface, or any other interface. Photons can be reflected specularly, scattered or absorbed. Reflected and scattered photons are falling onto the detector, which is usually located behind slits and a flight tube at ca. 850 mm measured from the sample position.

Filters are a crucial component for an XRR measurement, as reflectivity decays as $ q_z^{-4} $, but the detector dynamic range is limited. For example, at $q_z = 0.4 \,\text{A}^{-1}$, reflectivity $ R \simeq 10^{-8} $.
That means that incoming intensity of $10^9$ will produce only 10 reflected photos, giving a very low signal-to-noise ratio.
However, the same intensity around the critical angle, where reflectivity is close to 1, reflected intensity will be far out of the acceptable countrate for hybrid photon-counting detectors, typically used for this kind of experiment.

This example illustrates the need for changing filters frequently. These foils are often crystalline, for example Cu foils. This produce an unwanted scattering, if a grain of a foil enters a Bragg condition.
A share of photons is thus scattered, leading to a slightly different transmission coefficient. This is amplified by a non-uniformity in thickness of the filters, misalignment and leads to jumps in detected intensity, when filters changes.
To mitigate this problem, two counts are performed at the same incident angle: one with the old filter, and one with a new one. This allows to calculate a "true" transmission ratio and get rid of the jumps in reflectivity.

Use of 2D detectors gives two very important advantages:

- Increased resolution
- Simultaneous detection of diffuse scattering and background

Below is an example of several detector images, demonstrating these advantages. First, on the left figure a detector image shows a detector image on top with clearly visible gap between modules, shadows from the slits in front of the flight tube.
Also, a specular reflection (sharp) and a diffuse Bragg peak (broad) are marked with arrows. Intensity integration in the specular plane produces a line profile, shown in the bottom left image, which we denote $ I(X) $. Background is taken from the same area, but slightly out of reflection plane.

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

Resulting one-dimensional $ I(X) $ profiles are later converted to the slice of reciprocal space $ I\left(q_z, q_x, q_y=0\right) $ using the following formulae:

$$ q*z = k_0 \left( \sin\left( \chi + \frac{ \left( PX_0 - PX \right) \cdot D*{pix}}{{D\_{SDD} } } \right) + \sin\chi \right) $$

$$ q*x = k_0 \left( \cos\left( \chi + \frac{ \left( PX_0 - PX \right) \cdot D*{pix} }{ {D\_{SDD} } } \right) - \cos\chi \right) $$

$$ k_0 = \frac{2\pi}{\lambda} $$
