export type ProtoCharStructure = {
  img: string;
  name: string;
  bloodline: string;
  age: number;
  isAlive: boolean;
  message: string;
  category: Category;
  timeReigned?: number;
  weapon?: string;
  dexterity?: number;
  counseling?: string;
  serving?: string;
  loyalty?: number;
};

export type CharStructure = ProtoCharStructure & Category;

type Category = "king" | "fighter" | "counselor" | "squire";

export class ProtoCharCreate implements ProtoCharStructure {
  public isAlive!: boolean;

  constructor(
    public img: string,
    public name: string,
    public bloodline: string,
    public age: number,
    public message: string,
    public category: Category,
    public timeReigned: number,
    public weapon: string,
    public dexterity: number,
    public conseling: string,
    public serving: string,
    public loyalty: number
  ) {
    this.isAlive = true;
  }
}
