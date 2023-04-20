export const dateTransform = (date: Date) =>
  `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;

export const fixImagePath = (imageSource: string) =>
  imageSource + '/cover.webp';

export const splitDuration = (duration: number) => [
  Math.floor(duration / 60),
  duration - Math.floor(duration / 60) * 60,
];
