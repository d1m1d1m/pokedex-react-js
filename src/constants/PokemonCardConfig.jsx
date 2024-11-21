import NormalIcon from "../assets/svg/normal.svg?react";
import FightingIcon from "../assets/svg/fighting.svg?react";
import FlyingIcon from "../assets/svg/flying.svg?react";
import PoisonIcon from "../assets/svg/poison.svg?react";
import GroundIcon from "../assets/svg/ground.svg?react";
import RockIcon from "../assets/svg/rock.svg?react";
import BugIcon from "../assets/svg/bug.svg?react";
import GhostIcon from "../assets/svg/ghost.svg?react";
import SteelIcon from "../assets/svg/steel.svg?react";
import FireIcon from "../assets/svg/fire.svg?react";
import WaterIcon from "../assets/svg/water.svg?react";
import GrassIcon from "../assets/svg/grass.svg?react";
import ElectricIcon from "../assets/svg/electric.svg?react";
import PsychicIcon from "../assets/svg/psychic.svg?react";
import IceIcon from "../assets/svg/ice.svg?react";
import DragonIcon from "../assets/svg/dragon.svg?react";
import DarkIcon from "../assets/svg/dark.svg?react";
import FairyIcon from "../assets/svg/fairy.svg?react";
// import UnknownIcon from "../assets/svg/unknown.svg?react";

const pokemonTypeIconSize = 16;

export default {
    normal: {
        background: 'bg-normal-type-300',
        icon: <NormalIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    fighting: {
        background: 'bg-fighting-type-300',
        icon: <FightingIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    flying: {
        background: 'bg-flying-type-300',
        icon: <FlyingIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    poison: {
        background: 'bg-poison-type-300',
        icon: <PoisonIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    ground: {
        background: 'bg-ground-type-300',
        icon: <GroundIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    rock: {
        background: 'bg-rock-type-300',
        icon: <RockIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    bug: {
        background: 'bg-bug-type-300',
        icon: <BugIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    ghost: {
        background: 'bg-ghost-type-300',
        icon: <GhostIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    steel: {
        background: 'bg-steel-type-300',
        icon: <SteelIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    fire: {
        background: 'bg-fire-type-300',
        icon: <FireIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    water: {
        background: 'bg-water-type-300',
        icon: <WaterIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    grass: {
        background: 'bg-grass-type-300',
        icon: <GrassIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    electric: {
        background: 'bg-electric-type-300',
        icon: <ElectricIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    psychic: {
        background: 'bg-psychic-type-300',
        icon: <PsychicIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    ice: {
        background: 'bg-ice-type-300',
        icon: <IceIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    dragon: {
        background: 'bg-dragon-type-300',
        icon: <DragonIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    dark: {
        background: 'bg-dark-type-300',
        icon: <DarkIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    fairy: {
        background: 'bg-fairy-type-300',
        icon: <FairyIcon width={pokemonTypeIconSize} height={pokemonTypeIconSize}/>
    },
    unknown: {
        background: 'bg-unknown-type-300',
        icon: "Coming soon"
    },
};