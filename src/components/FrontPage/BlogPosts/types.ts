export type IPost = {
  excerpt: string
  featuredImage: any
  title: string
  uri: string
  id: number
}

export type IProps = {
  blogpostsPostlist: IPost[]
}
