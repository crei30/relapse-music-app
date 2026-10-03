export type Mood = "kilig" | "comfort" | "heartbreak" | "good-vibes";

export type Song = {
  id: string;
  title: string;
  artist: string;
  year: number;
  mood: Mood;
  memoryPrompt: string;
  coverColor: string;
};

export const featuredSongs: Song[] = [
  {
    id: "sample-1",
    title: "Your Memory",
    artist: "Relapse Sessions",
    year: 2004,
    mood: "comfort",
    memoryPrompt: "A song for the road home after a long day.",
    coverColor: "#d7b6ff"
  },
  {
    id: "sample-2",
    title: "Back to Summer",
    artist: "Relapse Sessions",
    year: 2010,
    mood: "good-vibes",
    memoryPrompt: "For afternoons that felt like they would never end.",
    coverColor: "#ffc98b"
  },
  {
    id: "sample-3",
    title: "Letters Never Sent",
    artist: "Relapse Sessions",
    year: 1998,
    mood: "heartbreak",
    memoryPrompt: "For the words you still remember by heart.",
    coverColor: "#f6a6b8"
  }
];
