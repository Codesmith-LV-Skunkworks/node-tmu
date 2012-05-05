task :default => [:test]

desc "Run all tests"
task :test do
  sh "node_modules/.bin/vows src-test/* --spec"
end
