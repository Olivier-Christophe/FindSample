export interface SoundDetailsModel {
  id: number;
  url: string;
  name: string;
  tags: string[];
  description: string;
  geotag?: any;
  created: string;
  license: string;
  type: string;
  channels: number;
  filesize: number;
  bitrate: number;
  bitdepth: number;
  duration: number;
  samplerate: number;
  username: string;
  pack: string;
  pack_name?: any;
  download: string;
  bookmark: string;
  previews: Previews;
  images: Images;
  num_downloads: number;
  avg_rating: number;
  num_ratings: number;
  rate: string;
  comments: string;
  num_comments: number;
  comment: string;
  similar_sounds: string;
  analysis: string;
  analysis_frames: string;
  analysis_stats: string;
  ac_analysis: Acanalysis;
}

interface Acanalysis {
  ac_tempo_confidence: number;
  ac_note_confidence: number;
  ac_depth: number;
  ac_note_midi: number;
  ac_temporal_centroid: number;
  ac_warmth: number;
  ac_loop: boolean;
  ac_hardness: number;
  ac_loudness: number;
  ac_reverb: boolean;
  ac_roughness: number;
  ac_log_attack_time: number;
  ac_boominess: number;
  ac_note_frequency: number;
  ac_tempo: number;
  ac_brightness: number;
  ac_sharpness: number;
  ac_tonality_confidence: number;
  ac_dynamic_range: number;
  ac_note_name: string;
  ac_tonality: string;
  ac_single_event: boolean;
}

interface Images {
  spectral_m: string;
  spectral_l: string;
  spectral_bw_l: string;
  waveform_bw_m: string;
  waveform_bw_l: string;
  waveform_l: string;
  waveform_m: string;
  spectral_bw_m: string;
}

interface Previews {
  'preview-lq-ogg': string;
  'preview-lq-mp3': string;
  'preview-hq-ogg': string;
  'preview-hq-mp3': string;
}