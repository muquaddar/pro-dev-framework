# [domain]/[file] — Symbol Index

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> **Tier 2 — Only when writing/modifying.** ~150 tokens per file.
> Full parameter-level signatures. Eliminates need to read the source file.

---

## [path/to/file.ext] — Symbol Index

**Domain:** [domain]
**Lines:** [N]
**Last Updated:** [date]

### Exports

#### [function/method name]
```typescript
Input:  { param1: type, param2: type }
Output: ReturnType
Throws: ErrorType('ERROR_CODE') | ErrorType('OTHER_CODE')
```

#### [function/method name]
```typescript
Input:  (param1: type, options?: { opt1: type, opt2: type })
Output: Promise<ReturnType>
Throws: ErrorType('ERROR_CODE')
Side effects: [logs, emails, cache invalidation]
```

#### [class name]
```typescript
Constructor: (dep1: Type, dep2: Type)
Properties:
  - prop1: type (readonly)
  - prop2: type
Methods:
  - method1(param: type) → ReturnType
  - method2(param: type) → Promise<ReturnType>
```

#### [type/interface name]
```typescript
{
  field1: type
  field2: type
  field3?: type (optional)
}
```

---

<!--
EXAMPLE: auth/auth.service.ts — Symbol Index

### authenticate
Input:  { email: string, password: string }
Output: Promise<{ user: User, token: string, refreshToken: string, expiresAt: Date }>
Throws: AuthError('INVALID_CREDENTIALS') | AuthError('ACCOUNT_LOCKED')
Side effects: Updates user.lastLoginAt

### refreshToken
Input:  { refreshToken: string }
Output: Promise<{ token: string, refreshToken: string, expiresAt: Date }>
Throws: AuthError('INVALID_REFRESH_TOKEN') | AuthError('TOKEN_EXPIRED')
Side effects: Invalidates old refresh token

### createUser
Input:  { email: string, password: string, name: string, role?: 'user' | 'admin' }
Output: Promise<User>
Throws: AuthError('EMAIL_EXISTS') | ValidationError('INVALID_EMAIL')
Side effects: Sends welcome email
-->
