// CSS className utility

export function cn(
  baseClass,
  { mods = {}, mix = '' } = {},
  { mods: defaultMods = {}, mix: defaultMix = '' } = {}
) {
  const modsEntries = Object.entries({ ...defaultMods, ...mods });
  const mixes = `${defaultMix} ${mix}`;

  if (!modsEntries.length) return baseClass.concat(' ', mixes).trim();

  const modsClasses = modsEntries
    .map(([key, value]) => typeof value === 'boolean' ?
      `${baseClass}_${key}` :
      `${baseClass}_${key}_${value}`
    )
    .join(' ');

  return baseClass.concat(' ', modsClasses, ' ', mixes).trim();
}
