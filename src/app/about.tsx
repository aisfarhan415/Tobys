import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-muted-foreground mb-8">
          We are passionate developers crafting innovative solutions to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p>
                To empower businesses and individuals through cutting-edge technology and creative solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p>
                To be a leader in the digital space by delivering exceptional value and innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
              <p>
                Integrity, creativity, and commitment to excellence are the core of everything we do.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
