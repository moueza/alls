#!/bin/bash
git log --name-status HEAD^..HEAD |grep A|tail -n +2 > poub.txt
#TODO rattrapper les non faits AV
cat poub.txt
