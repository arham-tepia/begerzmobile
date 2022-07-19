export interface DraftedBeg {
  inDraft?: boolean;
  beg?: {
    title?: string;
    amount?: string;
    fileObj?: any;
    media?: {
      video: string;
      thumbnail: string;
    };
    endDate?: Date;
    story?: string;
    publishType?: 'public' | 'private' | 'unlisted';
  };
}

const draftedBegAction = (beg: DraftedBeg) => {
  return {
    type: 'updateDraftedBeg',
    user: beg
  };
};

export default draftedBegAction;
