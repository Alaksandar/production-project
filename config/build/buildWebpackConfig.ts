import path from 'path'
import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from "./types/config"

export function buidWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    return {
        mode,
        // mode: 'production',  
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
      }

}