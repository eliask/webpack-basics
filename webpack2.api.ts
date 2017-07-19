// Export a modified version of @types/webpack Configuration which
// removes all the deprecated bits from Webpack 1.

import * as webpack from 'webpack'

type NewLoader = string | webpack.NewLoader

interface NewUseRule extends webpack.NewUseRule {
  use: NewLoader | NewLoader[]
}
interface RulesRule extends webpack.RulesRule {
  rules: NewRule[]
}
interface OneOfRule extends webpack.OneOfRule {
  oneOf: NewRule[]
}

type NewRule =
  | webpack.NewLoaderRule // no need to change this
  | NewUseRule
  | RulesRule
  | OneOfRule

interface NewModule extends webpack.NewModule {
  rules: NewRule[]
}

export interface Configuration extends webpack.Configuration {
  module?: NewModule,
  resolve?: webpack.NewResolve,
  resolveLoader?: webpack.NewResolveLoader
}
