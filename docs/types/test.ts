/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import pmf = require( './index' );


// TESTS //

// The function returns a number...
{
	pmf( 2, 0.4 ); // $ExpectType number
	pmf( 1, 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	pmf( true, 0.3 ); // $ExpectError
	pmf( false, 0.2 ); // $ExpectError
	pmf( '5', 0.1 ); // $ExpectError
	pmf( [], 0.1 ); // $ExpectError
	pmf( {}, 0.4 ); // $ExpectError
	pmf( ( x: number ): number => x, 0.2 ); // $ExpectError

	pmf( 0, true ); // $ExpectError
	pmf( 1, false ); // $ExpectError
	pmf( 0, '5' ); // $ExpectError
	pmf( 1, [] ); // $ExpectError
	pmf( 2, {} ); // $ExpectError
	pmf( 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	pmf(); // $ExpectError
	pmf( 0 ); // $ExpectError
	pmf( 1, 0.3, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	pmf.factory( 0.4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = pmf.factory( 0.4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid argument...
{
	const fcn = pmf.factory( 0.4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = pmf.factory( 0.4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a value other than a number...
{
	pmf.factory( true ); // $ExpectError
	pmf.factory( false ); // $ExpectError
	pmf.factory( '5' ); // $ExpectError
	pmf.factory( [] ); // $ExpectError
	pmf.factory( {} ); // $ExpectError
	pmf.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	pmf.factory( 0, 0.2 ); // $ExpectError
	pmf.factory( 0, 0.4, 8 ); // $ExpectError
}
