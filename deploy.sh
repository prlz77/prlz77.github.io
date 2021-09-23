bundle exec jekyll build
mv _site ../
git add .
git commit -m "upload last source"
git push origin src
git checkout master
ls
echo "These files will be removed, sure? crtl+c to abort"
read
rm -r ./*
cp -rf ../_site/* ./
rm -r ../_site
git add .
git commit -m "deploy"
git push origin master
