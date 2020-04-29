enum Justification {
  Left = 'flex-start',
  Center = 'center',
}

export const justifications = [Justification.Left, Justification.Center]

export type LayoutStyleProps = {
  justification: Justification
}

export type LayoutProps = {
  justification: number
  profile: any
  pictures: string[]
  reroll: () => void
}
