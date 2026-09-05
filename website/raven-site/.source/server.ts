// @ts-nocheck
import * as __fd_glob_17 from "../content/docs/typeengine/union-types.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/typeengine/type-normalization.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/typeengine/type-intelligence.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/typeengine/type-equality.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/typeengine/tuple-types.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/typeengine/recursive-types.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/typeengine/primitive-types.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/typeengine/optional-types.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/typeengine/literals.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/typeengine/function-types.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/typeengine/array-types.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/roadmap.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/playground.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/improvements.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/compiler.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/typeengine/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "typeengine/meta.json": __fd_glob_1, }, {"compiler.mdx": __fd_glob_2, "improvements.mdx": __fd_glob_3, "index.mdx": __fd_glob_4, "playground.mdx": __fd_glob_5, "roadmap.mdx": __fd_glob_6, "typeengine/array-types.mdx": __fd_glob_7, "typeengine/function-types.mdx": __fd_glob_8, "typeengine/literals.mdx": __fd_glob_9, "typeengine/optional-types.mdx": __fd_glob_10, "typeengine/primitive-types.mdx": __fd_glob_11, "typeengine/recursive-types.mdx": __fd_glob_12, "typeengine/tuple-types.mdx": __fd_glob_13, "typeengine/type-equality.mdx": __fd_glob_14, "typeengine/type-intelligence.mdx": __fd_glob_15, "typeengine/type-normalization.mdx": __fd_glob_16, "typeengine/union-types.mdx": __fd_glob_17, });