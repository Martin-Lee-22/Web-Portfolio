import sound from '../assets/audio/pop_2.mp3'

const pop_sound = new Audio(sound)
pop_sound.volume = 0.05

export const sound_effects = {"pop": pop_sound}