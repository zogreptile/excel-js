// CSS className utility

export function cn(baseClass, options = {}, defaultOptions = {}) {
  const mods = options.mods || {};
  const mix = options.mix || '';
  const defaultMods = defaultOptions.mods || {};
  const defaultMix = defaultOptions.mix || '';

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
