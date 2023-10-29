import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
    // @ts-ignore
    const token = request.cookies.get('Authorization')

    // @ts-ignore
    if (!token && !request.url.includes('auth') && jwt.verify(token.replace('Bearer ', ''))) {
        // @ts-ignore
        return NextResponse.redirect(new URL('/auth', request.url))
    }
}

export const config = {
    matcher: ['/cars/:part*',
        '/customers/:part*',
        '/employees/:part*',
        '/services/:part*',
        '/sales/:part*',
        '/api/cars/:part*',
        '/api/customers/:part*',
        '/api/employees/:part*',
        '/api/services/:part*',
        '/api/sales/:part*']
}

