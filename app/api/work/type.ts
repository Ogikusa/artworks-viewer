// 型が無茶苦茶になってる

export interface WorkInfo {
  id: string;
  title: string;
  workURL: string;
  viewerURL: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
}

export type AllWorksResponse = WorkInfo[];

export type AllPagesResponse = {
  index: number;
  width: number;
  height: number;
}[];

export type WorkInfoResponse = {
  id: string;
  title: string;
  visibility: string;
  rating: number;
  viewCount: number;
  workArtists: ({
    id: string;
    name: string;
  } | null)[];
  workCharacters: ({
    id: string;
    name: string;
  } | null)[];
  workTags: ({ id: string; name: string; sexual: string | null } | null)[];
  workFanCircles: ({
    id: string;
    name: string;
  } | null)[];
  workSources: ({
    id: string;
    name: string;
  } | null)[];
  series: {
    id: string;
    name: string;
  } | null;
};
