import React from 'react';
import { Camera, MapPin } from 'react-feather';

import get from 'lodash/get';

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  let bowls = 0;
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`;
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
  }
}

export function formatPostLocation(location) {
  return (
    <span>
      <MapPin size={11} /> {` ${location}`}
    </span>
  );
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang = 'en') {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}

export function formatNumberOfPhotos(frontmatter) {
  const photosNum =
    (get(frontmatter, 'images') || []).length +
    (get(frontmatter, 'blogImages') || []).length +
    (get(frontmatter, 'imageRows').flat() || []).length;

  return (
    photosNum > 0 && (
      <span>
        <Camera size={11} />
        {` ${photosNum}`}
      </span>
    )
  );
}
