/**
 * FabricIcons icon set component.
 * Usage: <FabricIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from './lib/create-icon-set';
import glyphMap from './glyphmaps/FabricIcons.json';

const iconSet = createIconSet(glyphMap, 'Fabric MDL2 Assets', 'FabricIcons.ttf');

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;

