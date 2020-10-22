#!/bin/bash
git log --name-status HEAD^..HEAD |grep A|tail -n +2 > poub.txt
