#!/bin/sh

/src/Scripts/wait-for-it.sh $POSTGRES_HOST:5432 --timeout=60 --strict -- echo "PostgreSQL is up; executing migrations..."

export PATH="$PATH:/root/.dotnet/tools"

dotnet tool install --global dotnet-ef

dotnet ef database update