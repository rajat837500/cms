export type Block = {
  id: string;
  type: string;
  props: Record<string, any>;
};

export type Page = {
  id: string;
  name: string;
  slug: string;
  blocks: Block[];
};