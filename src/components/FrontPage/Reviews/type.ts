export type ReviewsLink = {
  target: string
  title: string
  url: string
}

export type ISingleReview = {
  title: string
  content: string
  id: number
}

export type IReviews = {
  reviewsList: ISingleReview[]
}
