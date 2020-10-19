export function createPokemon(params: Partial<Pokemon>) {
  return params as Pokemon;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface GameIndice {
  game_index: number;
  version: Version;
}

export interface Item {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: {};
}

export interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

export interface Move {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export interface Move {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Species {
  name: string;
  url: string;
}

export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Other {
  dream_world: DreamWorld;
  official_artwork: OfficialArtwork;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface GenerationI {
  red_blue: RedBlue;
  yellow: Yellow;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  firered_leafgreen: FireredLeafgreen;
  ruby_sapphire: RubySapphire;
}

export interface DiamondPearl {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface HeartgoldSoulsilver {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Platinum {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface GenerationIv {
  diamond_pearl: DiamondPearl;
  heartgold_soulsilver: HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface Animated {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface GenerationV {
  black_white: BlackWhite;
}

export interface OmegarubyAlphasapphire {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface XY {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface GenerationVi {
  omegaruby_alphasapphire: OmegarubyAlphasapphire;
  x_y: XY;
}

export interface Icons {
  front_default: string;
  front_female?: any;
}

export interface UltraSunUltraMoon {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface GenerationVii {
  icons: Icons;
  ultra_sun_ultra_moon: UltraSunUltraMoon;
}

export interface GenerationViii {
  icons: {};
}

export interface Versions {
  generation_i: GenerationI;
  generation_ii: GenerationIi;
  generation_iii: GenerationIii;
  generation_iv: GenerationIv;
  generation_v: GenerationV;
  generation_vi: GenerationVi;
  generation_vii: GenerationVii;
  generation_viii: GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: Versions;
}

export interface Stat {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Type {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
