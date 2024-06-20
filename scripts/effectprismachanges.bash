#!/bin/bash
pnpm exec prisma migrate dev
pnpm exec prisma generate --no-engine