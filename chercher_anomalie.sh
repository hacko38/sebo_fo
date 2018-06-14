#!/usr/bin/bash
printf "SUPPRESSION DES FICHIERS INDÉSIRÉS :\n"
<<<<<<< HEAD
rm -v */*orig 2>/dev/null
rm -v */*/*orig 2>/dev/null
rm -v */*/*bak 2>/dev/null
rm -v */*/*/*orig 2>/dev/null
rm -v */*/*/*bak 2>/dev/null
rm -v */*/*/*/*orig 2>/dev/null
rm -v */*/*/*/*bak 2>/dev/null
rm -v */*/*/*/*/*orig 2>/dev/null
rm -v */*/*/*/*/*bak 2>/dev/null

printf "\nRECHERCHE DE FICHIERS CONTENANT DES ANOMALIES :\n"
grep "<<" */* 2>/dev/null
grep "<<" */*/* 2>/dev/null
grep "<<" */*/*/* 2>/dev/null
grep "<<" */*/*/*/* 2>/dev/null
grep "<<" */*/*/*/*/* 2>/dev/null
=======
rm -v src/*/*orig 2>/dev/null
rm -v src/*/*bak 2>/dev/null
rm -v src/*/*/*orig 2>/dev/null
rm -v src/*/*/*bak 2>/dev/null
rm -v src/*/*/*/*orig 2>/dev/null
rm -v src/*/*/*/*bak 2>/dev/null
rm -v src/*/*/*/*/*orig 2>/dev/null
rm -v src/*/*/*/*/*bak 2>/dev/null

printf "\nRECHERCHE DE FICHIERS CONTENANT DES ANOMALIES :\n"
grep "<<" src/*/* 2>/dev/null
grep "<<" src/*/*/* 2>/dev/null
grep "<<" src/*/*/*/* 2>/dev/null
grep "<<" src/*/*/*/*/* 2>/dev/null
>>>>>>> master
