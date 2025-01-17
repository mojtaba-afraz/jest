/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {expectError, expectType} from 'tsd-lite';
import type {ExpectationResult} from 'expect';
import {
  Context,
  SnapshotState,
  toMatchInlineSnapshot,
  toMatchNamedSnapshot,
  toMatchSnapshot,
  toThrowErrorMatchingInlineSnapshot,
  toThrowErrorMatchingNamedSnapshot,
  toThrowErrorMatchingSnapshot,
} from 'jest-snapshot';

// Context

expectType<SnapshotState>(({} as Context).snapshotState);

// toMatchSnapshot

expectType<ExpectationResult>(
  toMatchSnapshot.call({} as Context, {received: 'value'}),
);

expectType<ExpectationResult>(
  toMatchSnapshot.call({} as Context, {received: 'value'}, 'someHint'),
);

expectType<ExpectationResult>(
  toMatchSnapshot.call({} as Context, {received: 'value'}, {property: 'match'}),
);

expectType<ExpectationResult>(
  toMatchSnapshot.call(
    {} as Context,
    {received: 'value'},
    {property: 'match'},
    'someHint',
  ),
);

expectError(toMatchSnapshot({received: 'value'}));

// toMatchInlineSnapshot

expectType<ExpectationResult>(
  toMatchInlineSnapshot.call({} as Context, {received: 'value'}),
);

expectType<ExpectationResult>(
  toMatchInlineSnapshot.call(
    {} as Context,
    {received: 'value'},
    'inlineSnapshot',
  ),
);

expectType<ExpectationResult>(
  toMatchInlineSnapshot.call(
    {} as Context,
    {received: 'value'},
    {property: 'match'},
  ),
);

expectType<ExpectationResult>(
  toMatchInlineSnapshot.call(
    {} as Context,
    {received: 'value'},
    {property: 'match'},
    'inlineSnapshot',
  ),
);

expectError(toMatchInlineSnapshot({received: 'value'}));

// toMatchNamedSnapshot

expectError<ExpectationResult>(
  toMatchNamedSnapshot.call({} as Context, {received: 'value'}),
);

expectType<ExpectationResult>(
  toMatchNamedSnapshot.call(
    {} as Context,
    {received: 'value'},
    'snapshot name',
  ),
);

expectError<ExpectationResult>(
  toMatchNamedSnapshot.call(
    {} as Context,
    {received: 'value'},
    {property: 'match'},
  ),
);

expectType<ExpectationResult>(
  toMatchNamedSnapshot.call(
    {} as Context,
    {received: 'value'},
    'snapshot name',
    {property: 'match'},
  ),
);

expectError(toMatchNamedSnapshot({received: 'value'}));

// toThrowErrorMatchingSnapshot

expectType<ExpectationResult>(
  toThrowErrorMatchingSnapshot.call({} as Context, new Error('received')),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingSnapshot.call(
    {} as Context,
    new Error('received'),
    'someHint',
  ),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingSnapshot.call(
    {} as Context,
    new Error('received'),
    'someHint',
    true, // fromPromise
  ),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingSnapshot.call(
    {} as Context,
    new Error('received'),
    undefined,
    false, // fromPromise
  ),
);

expectError(toThrowErrorMatchingSnapshot({received: 'value'}));

// toThrowErrorMatchingInlineSnapshot

expectType<ExpectationResult>(
  toThrowErrorMatchingInlineSnapshot.call({} as Context, new Error('received')),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingInlineSnapshot.call(
    {} as Context,
    new Error('received'),
    'inlineSnapshot',
  ),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingInlineSnapshot.call(
    {} as Context,
    new Error('received'),
    'inlineSnapshot',
    true, // fromPromise
  ),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingInlineSnapshot.call(
    {} as Context,
    new Error('received'),
    undefined,
    false, // fromPromise
  ),
);

expectError(toThrowErrorMatchingInlineSnapshot({received: 'value'}));

// toThrowErrorMatchingNamedSnapshot

expectError<ExpectationResult>(
  toThrowErrorMatchingNamedSnapshot.call({} as Context, new Error('received')),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingNamedSnapshot.call(
    {} as Context,
    new Error('received'),
    'snapshot name',
  ),
);

expectType<ExpectationResult>(
  toThrowErrorMatchingNamedSnapshot.call(
    {} as Context,
    new Error('received'),
    'snapshot name',
    true, // fromPromise
  ),
);

expectError(toThrowErrorMatchingSnapshot({received: 'value'}));
