import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { featuredSongs, type Song } from "@relapse/shared";

export default function App() {
  const [selected, setSelected] = useState<Song | null>(null);
  return <SafeAreaView style={styles.screen}><StatusBar style="light" /><ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.logo}>relapse<Text style={styles.dot}>°</Text></Text>
    <Text style={styles.eyebrow}>MUSIC FOR REMEMBERING</Text>
    <Text style={styles.title}>Some songs take{`\n`}<Text style={styles.italic}>you back.</Text></Text>
    <Text style={styles.intro}>A space for the songs, stories, and moments you never really left behind.</Text>
    <Pressable style={styles.primary} onPress={() => setSelected(featuredSongs[0])}><Text style={styles.primaryText}>Start reminiscing  →</Text></Pressable>
    <Text style={styles.eyebrow}>CURATED FOR YOU</Text><Text style={styles.heading}>Where do you want to go?</Text>
    {featuredSongs.map(song => <Pressable key={song.id} style={styles.card} onPress={() => setSelected(song)}><View style={[styles.art, { backgroundColor: song.coverColor }]}><Text style={styles.music}>♫</Text></View><View><Text style={styles.meta}>{song.year} · {song.mood.replace("-", " ")}</Text><Text style={styles.song}>{song.title}</Text><Text style={styles.artist}>{song.artist}</Text></View><Text style={styles.play}>▶</Text></Pressable>)}
    {selected && <Pressable style={styles.player} onPress={() => setSelected(null)}><Text style={styles.playerLabel}>NOW PLAYING</Text><Text style={styles.playerSong}>{selected.title}</Text><Text style={styles.artist}>{selected.artist} · tap to close</Text></Pressable>}
  </ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({screen:{flex:1,backgroundColor:'#171326'},container:{padding:28,paddingBottom:60},logo:{color:'#fff',fontSize:25,fontWeight:'700',marginBottom:85},dot:{color:'#ed9ab7'},eyebrow:{color:'#e5a1bd',fontSize:11,fontWeight:'700',letterSpacing:2,marginBottom:15},title:{color:'#fff',fontSize:54,lineHeight:57,fontFamily:'serif',marginBottom:18},italic:{color:'#e8a5bd',fontStyle:'italic'},intro:{color:'#b8adc8',fontSize:16,lineHeight:25,maxWidth:340},primary:{backgroundColor:'#f3a4bc',borderRadius:26,padding:15,alignSelf:'flex-start',marginTop:22,marginBottom:75},primaryText:{color:'#24172c',fontWeight:'700'},heading:{color:'#fff',fontSize:30,fontFamily:'serif',marginBottom:24},card:{backgroundColor:'#211a35',borderRadius:12,padding:12,marginBottom:14,flexDirection:'row',alignItems:'center',gap:14},art:{width:75,height:75,borderRadius:7,alignItems:'center',justifyContent:'center'},music:{fontSize:38,color:'#32243d'},meta:{color:'#9e92ae',fontSize:10,textTransform:'uppercase',letterSpacing:1},song:{color:'#fff',fontSize:19,fontFamily:'serif',marginTop:5},artist:{color:'#a89db8',fontSize:13,marginTop:3},play:{color:'#f2a1ba',marginLeft:'auto',marginRight:8},player:{backgroundColor:'#f5eafa',borderRadius:12,padding:16,marginTop:10},playerLabel:{color:'#9a6684',fontSize:10,letterSpacing:1.5},playerSong:{color:'#21152d',fontSize:20,fontWeight:'700',marginTop:4}});
